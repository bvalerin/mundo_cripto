import Image from 'next/image';
import { CallToAction, HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-10 md:py-15">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-2 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="mt-10 flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                 <CTA data={callToAction as CallToAction} />
                {/* <CTA data={callToAction2 as CallToAction} /> */}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                placeholder="blur"
                loading="eager"
                priority
                sizes="(max-width: 64rem) 100w, 100v"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
