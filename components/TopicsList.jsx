import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/arquives', {
            cache: 'no-store',
        })

        if(!response.ok) { throw new Erro('Failed to fetch!') }
        
        return response.json()
    } catch (err) {
        console.log(`Error loading arquives: ${err}`)
    }
}

export default async function TopicsList() {

    const {arquives} = await getTopics()

    return  (
        <>
            {arquives.map((t) => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div className="text-justify">{t.description}</div>
                    </div>

                    <div>
                        <RemoveBtn id={t._id} />
                        <Link href={`/edit/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}