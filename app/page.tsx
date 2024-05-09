import Link from 'next/link';
import { CountPhotos } from './lib/s3';
import { FormUpload } from './lib/upload';
import Image from 'next/image';

export const dynamic = 'auto';

async function Example() {
	const NbPhotos = await CountPhotos();

	return (
		<div className="bg-white h-screen overflow-hidden">
			<header className="absolute inset-x-0 top-0 z-50">
				<div className="flex  justify-around items-center w-full my-5 ">
					<Link className="font-semibold underline " href={'/'}>
						Upload
					</Link>
					<Link className="font-semibold underline" href={'/progress'}>
						Achievements
					</Link>
				</div>
			</header>

			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center h-full">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Mathieu Stag Party</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">Help us collect the best memories of Mathieu</p>
						<FormUpload Name="Take a photo" />
						<p className="mt-32 text-lg leading-8 text-gray-600">
							Mathieu has currently <span className="font-bold">{NbPhotos} </span>souvenirs
						</p>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	);
}


export default async function Alt() {
	const NbPhotos = await CountPhotos();

	return (
		<div className="bg-white h-screen overflow-hidden">
			<div className='h-1/2  px-3 pt-2'>
				<div className='h-full w-full bg-indigo-600 rounded-[40px]  overflow-hidden relative'>
					<Image alt="mathieu alt" src='/photo-transparent.png'
						layout='fill'
						objectFit='cover'
						priority={true}
					/>
				</div>
			</div>
			<div className='h-1/2  px-5 flex-row'>
				<div className="text-center">
					{/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Mathieu Stag Party</h1> */}
					<p className="mt-4 text-lg font-semibold text-black">Now that you&apos;re here,<br></br> Take this guy in photo to help us create memories</p>
					<FormUpload Name="Take a photo" />
					<p className="text-lg leading-8 text-gray-600">
						Mathieu has currently <span className="font-bold">{NbPhotos} </span>souvenirs
					</p>
				</div>
			</div>
		</div>
	);
}