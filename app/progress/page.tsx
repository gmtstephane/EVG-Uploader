import Link from 'next/link';
import { CountPhotos } from '../lib/s3';
import { FormUpload } from '../lib/upload';

export const dynamic = 'auto';

export default async function Thanks() {
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
				<div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-56">
					<div className="text-center h-full">
						<h1 className="text-4xl mb-32 font-bold tracking-tight text-gray-900 sm:text-6xl">Achievements</h1>
					</div>

					<div className="mb-10">
						<p className="font-semibold mb-1">Goal 1</p>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-indigo-600 h-2.5 rounded-full w-10/12"></div>
						</div>
						<p className="font-semibold mb-1 text-indigo-600">{NbPhotos}/50</p>
					</div>

					<div className="mb-10">
						<p className="font-semibold mb-1">Goal 3</p>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-indigo-600 h-2.5 rounded-full w-4/12"></div>
						</div>
						<p className="font-semibold mb-1 text-indigo-600">{NbPhotos}/100</p>
					</div>

					<div className="mb-10">
						<p className="font-semibold mb-1">Goal 3</p>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div className="bg-indigo-600 h-2.5 rounded-full w-2/12"></div>
						</div>
						<p className="font-semibold mb-1 text-indigo-600">{NbPhotos}/150</p>
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
				<div className="w-full items-center justify-center text-center">
					<Link href={'/'} className=" text-lg leading-8 text-indigo-600 mb-10">
						Back
					</Link>
				</div>
			</div>
		</div>
	);
}
