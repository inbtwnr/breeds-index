'use client';

import {useParams} from "next/navigation";
import {fetchClient} from "@/lib/utils";
import {useEffect, useState} from "react";
import Image from "next/image";
import {BreedType} from "@/types/breed";

export default function Breed({url}: {url: string}) {
    const [breed, setBreed] = useState<BreedType>({
        name: '',
        description: '',
        image: [],
        id: ''
    } as BreedType);
    const {slug} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchClient(`${url}/v1/breeds/${slug}`)
            .then((data) => {
                setBreed(data);
                return data;
            }).then((data) => {
                fetchClient(`${url}/v1/images/search?breed_id=${data.id}`)
                    .then((data) => {
                        setBreed((breed) => {
                            const res = {
                                ...breed,
                                image: data
                            }
                            console.log(res);
                            return res
                        });
                    });
        })
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return <p>Please wait...</p>
    }

    return (
        <>
            <div>
                {breed.image?.map((image) => (
                    <Image key={image.id} src={image.url} width={image.width} height={image.height} alt={breed.name} />
                ))}
            </div>
            <div className={'space-y-2'}>
                <h1 className={'text-4xl font-bold'}>{breed?.name}</h1>
                <p>{breed?.description}</p>
            </div>
        </>
    );
}