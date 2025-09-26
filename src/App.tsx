

function App() {
  const appname = 'Stepwise';
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <p>&nbsp;</p>
      <p className="text-4xl font-bold text-center text-gray-300">
        Welcome to the <p className="text-9xl m-2 p-2 text-amber-600">{appname}</p>
      </p>
      <p className="text-lg text-center text-gray-400 mt-4 bottom-0">
        This site is under maintenance. Please check back later.
      </p>
    </div>
  )
}

export default App
