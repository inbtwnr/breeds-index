import Link from "next/link";
import {Card, CardHeader, CardTitle} from "@/components/card";
import Image from "next/image";

export default function BreedCard({id, name, image, species}) {
    return (<Link href={`/breed/${species}/${id}`}>
        <Card className={'hover:opacity-80 flex-1 basis-80 lg:h-[380px] flex flex-col sm:max-w-[400px] lg:max-w-[336px] xl:max-w-[420px] overflow-hidden transition-all duration-100'} key={id}>
            <div className={'flex-grow overflow-hidden'}>
                <Image width={image.width} height={image.height} className={'h-full object-cover'} src={image.url} alt={name} />
            </div>
            <CardHeader className={'flex-shrink-0'}>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
        </Card>
    </Link>)
}