import { summary } from '@/data/summary'

const Summary = ({summary}) => {
    return (
        <>
            <div className='flex flex-col gap-8 md:gap-12 w-[95%] md:w-[92%] px-6 mx-auto mt-32 pb-20 md:px-0'>
                {summary?.map((ele, index) => (
                    <div key={index} className='text-lightFontColor'>
                        <h3 className='text-xl md:text-[26px] font-semibold mb-3'>{ele?.heading}</h3>
                        <p className='text-md lg:text-lg'>{ele?.text}</p>
                        {ele?.list && <ul className='list-disc pl-6 pt-7'>
                            {
                                ele?.list?.map((ele,index)=>(
                                    <li className='text-md lg:text-lg mb-[10px]' key={index}><span className='font-semibold'>{ele?.title}: </span>{ele?.description}</li>
                                ))
                            }
                        </ul>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Summary
