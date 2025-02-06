const Card = () => {
  return (
    <li>
      <article className="bg-[rgba(24,24,27,0.5)] flex gap-4 p-4 border border-[rgb(39,39,42)] hover:border-yellow-500 transition-colors rounded-lg">
        <div className="bg-[rgba(234,179,8,0.2)] p-3 rounded-lg text-yellow-500">
          <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-medium">Rock</h3>
          <span className="text-zinc-400 font-medium">45 eventos</span>
        </div>
      </article>
    </li>
  )
}
export const Tendencies = () => {
  return (
    <section className="max-sm:mt-8 text-white p-8 col-start-1 col-end-14 row-start-4 row-end-5 bg-[rgba(234,179,8,0.1)]">
      <span className="flex items-center gap-3">
        <svg className="size-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
        <h2 className="text-3xl sm:text-4xl font-bold">Tendencias</h2>
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          [1, 2, 3, 4].map((_item,index) => (
            <Card key={index}/>
          ))
        }
      </ul>
    </section>
  )
}
