import DetailsBox from "./components/detailsBox/page";

export default function Details() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 lg:justify-between lg:flex-row">
            <DetailsBox />
            <DetailsBox />
            <DetailsBox />
        </div>
    )
}