const CatDetail = ({ kat }) => {
    return (
        <div className='flex-1 bg-gray-100 rounded-md'>
                {!kat ? (
                  <div className='flex flex-col h-full w-full justify-center items-center'>
                    <h2 className='font-bold text-lg'>Please select a Cat first</h2>
                  </div>
                ) : (
                  <div className='flex flex-col h-full m-auto text-center lg:w-[400px] w-1/2 justify-center items-center'>
                    <div className={`p-2 mb-6 border-4 ${kat.gender == 'male' ? 'border-blue-400' : 'border-rose-400' } rounded-[200px]`}>
                      <img className='rounded-[100px] lg:w-[200px] sm:w-[100px]' src={`${process.env.REACT_APP_API_URL}/images/${kat.imageFileName}`} />
                    </div>
                    <div>
                      <div>
                        <p className='font-bold text-2xl'>{kat.name}</p>
                        <p className='italic text-sm'>{kat.age} - {kat.gender}</p>
                        
                      </div>
                      <p className='mt-4'>{kat.description}</p>
                    </div>
                  </div>
                )}
            </div>
    )
}

    export default CatDetail;