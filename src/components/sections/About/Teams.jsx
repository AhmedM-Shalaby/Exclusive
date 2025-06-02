import Image from "next/image";

function Teams() {
  const MyTeams = [
    {
      name: "Tom Cruise",
      imagePath: "/person1.png",
      jopTitle: "Founder & Chairman",
    },
    {
      name: "Emma Watson",
      imagePath: "/person2.png",
      jopTitle: "Managing Director",
    },
    {
      name: "Will Smith",
      imagePath: "/person3.png",
      jopTitle: "Product Designer",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
      {MyTeams.map((person) => (
        <div key={person.name}>
          <div className="bg-[#F5F5F5] p-4 justify-items-center">
            <Image
              src={person.imagePath}
              width={300}
              height={300}
              alt={person.name}
              className="w-[370px] h-[430px] object-contain "
            />
          </div>
          <div className=" font-semibold mt-4">
            <h4 className="text-2xl">{person.name}</h4>
            <p className="text-md">{person.jopTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teams;
