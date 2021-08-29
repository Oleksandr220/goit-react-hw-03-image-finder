const Button = ({ onClick }) => {
  return (
    <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
      <button type="submit" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
