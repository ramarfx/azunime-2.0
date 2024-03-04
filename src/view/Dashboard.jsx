import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faAdd,
  faPlay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const card = [
    "/bocchi.webp",
    "/furia.jpg",
    "/bocchi.webp",
    "/furia.jpg",
    "/bocchi.webp",
    "/furia.jpg",
    "/bocchi.webp",
    "/furia.jpg",
    "/bocchi.webp",
    "/furia.jpg",
  ];

  const Genre = [
    "All",
    "Action",
    "Romance",
    "Isekai",
    "All",
    "Action",
    "Romance",
    "Isekai",
    "All",
    "Action",
    "Romance",
    "Isekai",
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
          {/* card */}
          <div className="flex h-[400px] w-full flex-col items-center gap-4 rounded-xl bg-secondary-100 md:w-[300px]">
            <div className="-mt-14 size-[130px] overflow-hidden rounded-full border-[7px] border-secondary-100">
              <img
                src="/profile.jpg"
                className="object-fil w-full object-center"
                alt=""
              />
            </div>

            <h5 className="text-center text-xl font-semibold">Ramadina Al Muzthazam</h5>

            <div className="rounded-xl bg-primary px-7 py-2">
              <p className="text-lg">Administator</p>
            </div>

            <div className="py-2">
              <p className="text-sm text-secondary-50">
                bergabung pada 12 juni 2023
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <Link
                to={"#"}
                className="flex items-center gap-1.5 text-base font-light"
              >
                <FontAwesomeIcon icon={faAdd} className="text-primary" />
                Tambah Anime
              </Link>

              <Link
                to={"#"}
                className="flex items-center gap-1.5 text-base font-light"
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="text-red-500"
                />
                Logout
              </Link>
            </div>
          </div>

          {/* main */}
          <div className="w-full rounded-xl bg-secondary-100 p-6 pb-12 md:w-[calc(100%-315px)]">
            <div className="overflow-x-hidden pb-4">
              <ul className="flex gap-16 text-base font-semibold">
                {Genre.map((genre, index) => (
                  <li
                    key={index}
                    className="text-secondary-50 transition-colors hover:text-white"
                  >
                    <Link to={"#"}>{genre}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-5 lg:grid-cols-6">
              {card.map((image, index) => (
                <div
                  key={index}
                  className={`group relative max-h-[250px] w-auto overflow-hidden rounded-xl`}
                >
                  <img
                    src={image}
                    className={`h-full w-full object-cover brightness-100 transition group-hover:brightness-[30%]`}
                  />

                  <div className="absolute right-0 top-0 flex h-full w-full flex-col items-center justify-center gap-1 opacity-0 transition-all group-hover:opacity-100">
                    <Link
                      to={"#"}
                      className="absolute right-1 top-1 scale-90 text-white transition-colors hover:text-primary md:right-1.5 md:top-1.5"
                    >
                      <FontAwesomeIcon icon={faEdit} className="text-sm" />
                    </Link>
                    <p className="scale-75 rounded-lg bg-slate-100/30 px-2 py-1 text-xs font-thin text-white md:scale-100">
                      12 episode
                    </p>
                    <h5 className="text-center text-xs font-semibold text-white md:px-1 md:text-base">
                      Bocchi The Rock K-On desu
                    </h5>
                    <p className="text-xs font-thin text-white">Music</p>

                    <Link
                      to={"#"}
                      className="flex items-center gap-1 rounded-lg bg-slate-100/30 px-2 py-1 text-xs font-thin text-white hover:bg-primary md:px-3 md:text-sm"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                      Play
                    </Link>
                  </div>
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
