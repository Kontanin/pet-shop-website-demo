import Link from './Link';
function Buttonbar() {
  const links = [
    { label: 'mailto:recipient@example.com', path: 'mailto:recipient@example.com' }
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3 p-10"
        activeClassName="border-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  console.log()
  return (
    <div className="flex-col items-start">

      <p>Or Tor Gor Pet Market 101 Phahonyothin Rd, Chatuchak, Bangkok 10900

Open Daily 9am-8pm

</p>
      <h1>Phone Number:+6681 296 24xx   ||Home:  082 118 1XXX </h1>
      {renderedLinks}
    </div>
  );
}

export default Buttonbar;
