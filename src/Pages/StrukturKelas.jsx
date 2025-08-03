import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			{/* wali kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="Wali Kelas" Nama="Fajar Rahmadi, S.Pd" Width="150px" />
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-1rem]" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
				</div>

				<div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]" data-aos="fade-up" data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>

				<div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* ketua & wakil ketua */}
				<div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.2rem]">
						<BorderStruktur Jabatan="Ketua Kelas" Nama="Muhammad Riski" Width="120px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.2rem]">
						<BorderStruktur Jabatan="Wakil Ketua" Nama="Muhammad Saman" Width="120px" />
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
				</div>

				{/* sekretaris & bendahara */}
				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem]" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
				</div>

				<div className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]" data-aos="fade-up" data-aos-duration="1200">
					<div className="flex-col">
						<BorderStruktur Jabatan="Sekretaris" Nama="M. Ridho Rifani" Width="120px" />
					</div>
					<div className="flex-col">
						<BorderStruktur Jabatan="Bendahara" Nama="Ahmad Marwan" Width="120px" />
					</div>
				</div>

				{/* upacara, kebersihan, keamanan, olahraga */}
				<div className="relative top-[-12rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>

				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13.5rem]" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
				</div>

				<div className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-14.44rem]" data-aos="fade-up" data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
				</div>
				<div className="flex gap-[10.6rem] relative top-[-15.3rem] lg:gap-[23.1rem]" data-aos="fade-up" data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				<div className="flex flex-col gap-10 lg:flex-row lg:gap-[10rem] relative top-[-15.5rem]" data-aos="fade-up" data-aos-duration="1100">
					{/* Upacara */}
					<div className="flex-col items-center">
						<BorderStruktur Jabatan="Seksi Upacara" Nama="M. Saman" Width="140px" />
						<BorderStruktur Jabatan="" Nama="A. Nizar" Width="140px" />
						<BorderStruktur Jabatan="" Nama="Fauzi" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Zairullah" Width="140px" />
					</div>

					{/* Kebersihan */}
					<div className="flex-col items-center">
						<BorderStruktur Jabatan="Seksi Kebersihan" Nama="Sayyid Ahmad" Width="140px" />
						<BorderStruktur Jabatan="" Nama="Ramadhani" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Yusuf" Width="140px" />
						<BorderStruktur Jabatan="" Nama="Mustafa" Width="140px" />
					</div>

					{/* Keamanan */}
					<div className="flex-col items-center">
						<BorderStruktur Jabatan="Seksi Keamanan" Nama="M. Raihan" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Rizki" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Ridani" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Noval" Width="140px" />
					</div>

					{/* Olahraga */}
					<div className="flex-col items-center">
						<BorderStruktur Jabatan="Seksi Olahraga" Nama="M. Riski" Width="140px" />
						<BorderStruktur Jabatan="" Nama="A. Badali" Width="140px" />
						<BorderStruktur Jabatan="" Nama="M. Saman" Width="140px" />
						<BorderStruktur Jabatan="" Nama="Yusuf" Width="140px" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StrukturKelas
