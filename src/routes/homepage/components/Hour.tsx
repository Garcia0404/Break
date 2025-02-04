
import { useEffect,useState } from "react"
export const Hour = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section 
      className="hidden xl:grid bg-[rgba(168,85,247,0.2)] text-[#231232] text-8xl p-4 font-extrabold row-start-1 row-end-2 col-start-12 col-end-14 place-content-center text-center rounded-xl">
      <span style={{WebkitTextStroke:"2px #d8b4fe"}}>{date.getHours().toString().padStart(2, '0')}</span>  
      <span style={{WebkitTextStroke:"2px #d8b4fe"}}>{date.getMinutes().toString().padStart(2, '0')}</span>
    </section>
  )
}
