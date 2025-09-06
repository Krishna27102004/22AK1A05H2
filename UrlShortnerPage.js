import React, { useState } from "react";
import useApi from "../hooks/useApi";

function UrlShortenerPage() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const api = useApi();

  const handleShorten = async () => {
    try {
      const response = await api.post("/shorten", { originalUrl: longUrl });
      setShortUrl(response.shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input 
        type="text" 
        placeholder="Enter long URL" 
        value={longUrl} 
        onChange={(e) => setLongUrl(e.target.value)} 
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}

export default UrlShortenerPage;
