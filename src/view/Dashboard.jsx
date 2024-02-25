import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div
        id="jumbotron"
        className="w-full h-[360px] overflow-hidden bg-[url('/banner.webp')] bg-cover bg-[40%]">
        <div className="w-full h-full bg-black/60"></div>
      </div>

      <div className="container pt-4 h-[200vh]">
        <div className="flex flex-col md:flex-row gap-4 px-4 max-w-[1400px]">
          <div className="w-[300px] h-[400px] flex flex-col gap-4 items-center bg-secondary-100 rounded-xl">
            <div className="size-[130px] rounded-full -mt-14 overflow-hidden border-[7px] border-secondary-100">
              <img
                src="/profile.jpg"
                className="w-full object-fil object-center"
                alt=""
              />
            </div>

            <h5 className="text-center font-semibold text-xl">Admin</h5>

            <div className="bg-primary rounded-xl py-2 px-7">
              <p className="text-lg">Administator</p>
            </div>

            <div className="py-2">
              <p className="text-secondary-50 text-sm">
                bergabung pada 12 juni 2024
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <Link
                to={"#"}
                className="font-light text-base flex items-center gap-1">
                <span className="material-symbols-outlined text-primary">
                  add
                </span>{" "}
                Tambah Anime
              </Link>

              <Link
                to={"#"}
                className="font-light text-base flex items-center gap-1">
                <span className="material-symbols-outlined text-red-500">
                  logout
                </span>{" "}
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
