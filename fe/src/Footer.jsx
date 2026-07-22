function Footer() {
  const homeAddress = "Lučica 834, 21465, Jelsa";

  const mapsUrl = `https://google.com/maps/search/?api=1&query=${encodeURIComponent(homeAddress)}`;
  return (
    <div className="footer">
      <h3>Footer</h3>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        Get Directions
      </a>
    </div>
  );
}

export default Footer;
