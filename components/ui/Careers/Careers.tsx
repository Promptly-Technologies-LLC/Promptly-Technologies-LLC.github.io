import s from './Careers.module.css'
import Careers from '@/types/careers'
import careersJSON from '@/customizations/careers.json'

export default async function Careers() {
    const careers: Careers = careersJSON
    
    return(
        <section>
            <a href="#careers"></a>
            <div className={s.careerssectioncontainer}>
                <div className={s.careersheader}>
                    <h1>{careers.heading}</h1>
                    <h2>{careers.subheading}</h2>
                </div>
                <div className="flex justify-center">
                    {careers.listings.map((listing) => {
                        return(
                            <div className="items-center w-full p-4 border rounded-lg border-light-text-hover dark:border-dark-text-hover shadow">
                                <h3 className="mt-2 mb-4">{listing.title}</h3>
                                <p className="mb-2">{listing.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}