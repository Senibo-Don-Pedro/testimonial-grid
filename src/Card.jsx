import Texts from './cardText.json'

const data = Texts

export const Card = () => {
  return (
    <>
      <div
        className={`relative p-8  rounded-lg shadow-xl bg-QModerateviolet text-white md:col-span-2`}
      >
        <div className='flex items-center gap-4 mb-4'>
          <img
            className='w-9 rounded-full outline outline-2 outline-QLightgray/[50%] '
            src={`/images/image-${data[0].imgUrl}.jpg`}
            alt='icon'
          />

          <div className='font-semibold '>
            <p>{data[0].name}</p>
            <p className='opacity-[50%] font-medium'>Verified Graduate</p>
          </div>
        </div>
        <div className='mb-4 text-2xl font-bold text-left '>
          <h2 className='relative z-10'>{data[0].header}</h2>
        </div>
        <div className='font-semibold  opacity-[50%] text-left'>
          <p>{data[0].paragraph}</p>
        </div>
        {data[0].svg ? (
          <img
            className='absolute top-0 w-32 right-6 md:right-24'
            src={`/images/${data[0].svg}.svg`}
            alt='image'
          />
        ) : null}
      </div>

      <div
        className={`relative p-8  rounded-lg shadow-xl bg-QVerydarkgrayishblue text-white `}
      >
        <div className='flex items-center gap-4 mb-4'>
          <img
            className='w-9 rounded-full outline outline-2 outline-QLightgray/[50%] '
            src={`/images/image-${data[1].imgUrl}.jpg`}
            alt='icon'
          />

          <div className='font-semibold '>
            <p>{data[1].name}</p>
            <p className='opacity-[50%] font-medium'>Verified Graduate</p>
          </div>
        </div>
        <div className='mb-4 text-2xl font-bold text-left '>
          <h2 className='relative z-10'>{data[1].header}</h2>
        </div>
        <div className='font-semibold  opacity-[50%] text-left'>
          <p>{data[1].paragraph}</p>
        </div>
      </div>

      <div
        className={`relative p-8  rounded-lg shadow-xl bg-white text-QVerydarkgrayishblue md:row-start-2 `}
      >
        <div className='flex items-center gap-4 mb-4'>
          <img
            className='w-9 rounded-full outline outline-2 outline-QLightgray/[50%]  '
            src={`/images/image-${data[2].imgUrl}.jpg`}
            alt='icon'
          />

          <div className='font-semibold '>
            <p>{data[2].name}</p>
            <p className='opacity-[50%] font-medium'>Verified Graduate</p>
          </div>
        </div>
        <div className='mb-4 text-2xl font-bold text-left '>
          <h2 className='relative z-10'>{data[2].header}</h2>
        </div>
        <div className='font-semibold  opacity-[50%] text-left'>
          <p>{data[2].paragraph}</p>
        </div>
      </div>

      <div
        className={`relative p-8  rounded-lg shadow-xl bg-Verydarkblackishblue text-white md:row-start-2 md:col-start-2 md:col-span-2 `}
      >
        <div className='flex items-center gap-4 mb-4'>
          <img
            className='w-9 rounded-full outline outline-2 outline-QLightgray/[50%] '
            src={`/images/image-${data[3].imgUrl}.jpg`}
            alt='icon'
          />

          <div className='font-semibold '>
            <p>{data[3].name}</p>
            <p className='opacity-[50%] font-medium'>Verified Graduate</p>
          </div>
        </div>
        <div className='mb-4 text-2xl font-bold text-left '>
          <h2 className='relative z-10'>{data[3].header}</h2>
        </div>
        <div className='font-semibold  opacity-[50%] text-left'>
          <p>{data[3].paragraph}</p>
        </div>
      </div>

      <div
        className={`relative p-8  rounded-lg shadow-xl text-QVerydarkgrayishblue bg-white md:row-span-2`}
      >
        <div className='flex items-center gap-4 mb-4'>
          <img
            className='w-9 rounded-full outline outline-2 outline-QLightgray/[50%] '
            src={`/images/image-${data[4].imgUrl}.jpg`}
            alt='icon'
          />

          <div className='font-semibold '>
            <p>{data[4].name}</p>
            <p className='opacity-[50%] font-medium'>Verified Graduate</p>
          </div>
        </div>
        <div className='mb-4 text-2xl font-bold text-left '>
          <h2 className='relative z-10'>{data[4].header}</h2>
        </div>
        <div className='font-semibold  opacity-[50%] text-left'>
          <p>{data[4].paragraph}</p>
        </div>
      </div>
    </>
  )
}
