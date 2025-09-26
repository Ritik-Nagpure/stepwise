
const Maintenance = () => {
    const appname = 'Stepwise';
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <p>&nbsp;</p>
            <p className="text-5xl font-bold text-center text-gray-300 text-stroke-black">
                Welcome to the <p className="text-9xl m-2 p-2 text-amber-600 text-stroke-gray">{appname}</p>
            </p>
            <p className="text-2xl font-semibold text-center text-gray-700 m-4 bottom-0">
                This site is under maintenance. Please check back later.
            </p>
        </div >

    )
}

export default Maintenance