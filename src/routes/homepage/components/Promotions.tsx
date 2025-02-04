const Card = () => {
  return (
    <li className="bg-[rgba(94,33,151,0.6)] rounded-lg p-4 border border-[rgba(255,255,255,0.5)]">
      <article className="grid gap-4">
        <div className="py-6 border border-[rgba(255,255,255,0.5)] bg-[#A284C2] rounded-lg flex justify-center">
          <svg className="size-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5E2197">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>
          <p className="font-light">Compra una entrada y lleva.</p>
        </div>
      </article>
    </li>
  )
}
export const Promotions = () => {
  return (
    <section className="text-white col-start-1 col-end-7">
      <ul className="grid grid-cols-3 gap-4">
        {
          [1,2,3].map((_item,index) => (
            <Card key={index}/>
          ))
        }
      </ul>
    </section>
  )
}
