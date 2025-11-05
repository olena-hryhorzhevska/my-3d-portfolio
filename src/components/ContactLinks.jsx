import { gmail, linkedin, github } from '../assets';

export default function ContactLinks() {
  return (
    <div className="flex justify-center items-center gap-6 mb-7">
      {[
        { src: gmail, alt: 'gmail', link: 'mailto:elenahry8@gmail.com' },
        {
          src: linkedin,
          alt: 'linkedin',
          link: 'https://www.linkedin.com/in/olena-hryhorzhevska/',
        },
        { src: github, alt: 'github', link: 'https://github.com/olena-hryhorzhevska' },
      ].map((icon, i) => (
        <div
          key={i}
          onClick={() => window.open(icon.link, '_blank')}
          className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className={`w-[40px] h-[40px] object-contain hover:scale-110 transition-transform duration-300 ${
              icon.alt === 'gmail' ? 'scale-[1.25]' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
}
