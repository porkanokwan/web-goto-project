import notFound from "../img/notFound.jpg";

function NotFoundPage() {
  return (
    <div className="bg-white">
      <h1 className="h1-notfound">404 Not Found</h1>
      <img src={notFound} alt="404 not found" className="w-mt" />
    </div>
  );
}

export default NotFoundPage;
