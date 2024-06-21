import URLs from "../data/URLs";


const Pages = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="grid grid-cols-5 gap-4 text-center">
                {URLs.map(url => (
                    <>
                    { url.no == 1 ? <div className="col-span-5 text-xl font-bold">{url.area} 권역 </div> : null }
                    <a key={url.id} href={`?page=${url.area}-${url.no}`} rel="noreferrer" className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300">
                        {url.area} - {url.no}
                    </a>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Pages;