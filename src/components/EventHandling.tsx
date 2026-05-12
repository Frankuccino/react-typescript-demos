const EventHandling = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Mouse Clicked", e.currentTarget);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2>Event Handling</h2>
      <button onClick={handleClick}>Click me me mee me </button>
    </div>
  );
};

export default EventHandling;
