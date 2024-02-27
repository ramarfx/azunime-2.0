import { Link } from "react-router-dom";

const Dashboard = () => {
  const card = [
    "/public/bocchi.webp",
    "/public/furia.jpg",
    "/public/bocchi.webp",
    "/public/furia.jpg",
    "/public/bocchi.webp",
    "/public/furia.jpg",
    "/public/bocchi.webp",
    "/public/furia.jpg",
    "/public/bocchi.webp",
    "/public/furia.jpg",
  ];

  return (
    <div>
      <div
        id="jumbotron"
        className="h-[360px] w-full overflow-hidden bg-[url('/banner.webp')] bg-cover bg-[40%]"
      >
        <div className="h-full w-full bg-black/60"></div>
      </div>

      <div className="container h-[200vh] pt-4">
        <div className="flex max-w-[1400px] flex-col gap-4 md:flex-row">
          <div className="flex h-[400px] w-full flex-col items-center gap-4 rounded-xl bg-secondary-100 md:w-[300px]">
            <div className="-mt-14 size-[130px] overflow-hidden rounded-full border-[7px] border-secondary-100">
              <img
                src="/profile.jpg"
                className="object-fil w-full object-center"
                alt=""
              />
            </div>

            <h5 className="text-center text-xl font-semibold">Admin</h5>

            <div className="rounded-xl bg-primary px-7 py-2">
              <p className="text-lg">Administator</p>
            </div>

            <div className="py-2">
              <p className="text-sm text-secondary-50">
                bergabung pada 12 juni 2024
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <Link
                to={"#"}
                className="flex items-center gap-1 text-base font-light"
              >
                <span className="material-symbols-outlined text-primary">
                  add
                </span>{" "}
                Tambah Anime
              </Link>

              <Link
                to={"#"}
                className="flex items-center gap-1 text-base font-light"
              >
                <span className="material-symbols-outlined text-red-500">
                  logout
                </span>{" "}
                Logout
              </Link>
            </div>
          </div>

          <div className="w-full rounded-xl bg-secondary-100 p-6 pb-12 md:w-[calc(100%-315px)]">
            <div className="overflow-x-hidden pb-4">
              <ul className="flex gap-16 text-base font-semibold text-secondary-50 hover:text-secondary-50">
                <li>All</li>
                <li>Action</li>
                <li>Romance</li>
                <li>Action</li>
                <li>Romance</li>
                <li>Action</li>
                <li>Romance</li>
                <li>Action</li>
                <li>Romance</li>
                <li>Action</li>
                <li>Romance</li>
              </ul>
            </div>

            <div className="grid w-full grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5">
              {card.map((image, index) => (
                <div
                  key={index}
                  className="relative max-h-[250px] overflow-hidden rounded-xl bg-red-500"
                >
                  <img src={image} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
