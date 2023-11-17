const Header = () => {
  const date = new Date().toDateString();

  return (
    <header>
      <div>오늘 날짜</div>
      <div>{date}</div>
    </header>
  );
};

export default Header;
