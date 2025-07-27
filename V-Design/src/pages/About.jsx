import Squares from "../assets/Union.png";
import Learning from "../assets/people.png";


export function About() {
  return (
    <div className="text-text font-inter">
      <div className="bg-bg w-full min-h-screen flex justify-center">
        <div className="w-10/12 flex justify-center items-center relative gap-12">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
          <div className="w-3/5 h-full flex flex-col justify-center relative z-10 gap-8">
            <div>
              <h2 className="text-lg-heading">About</h2>
              <p className="text-body text-l-text">
                Lorem ipsum dolor, sit amet consectetur. Lorem, ipsum dolor.
              </p>
            </div>
            <p className="text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eos corporis ipsam pariatur quaerat et, vero ut atque
              laborum! Cumque!
            </p>
            <p className="text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eos corporis ipsam pariatur quaerat et, vero ut atque
              laborum! Cumque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod quam architecto cumque cupiditate, facilis
              molestiae ad ab, rem harum laboriosam asperiores commodi ut modi
              minus, perferendis provident neque ipsa et! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Laborum obcaecati error
              doloribus perspiciatis, non fuga.
            </p>
          </div>
          <div className="w-2/5 h-full flex justify-center items-center relative z-10">
            <div className="w-full h-3/4 border-[1px] border-border rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text font-inter relative">
              <div className="w-10/12 flex justify-center items-start relative gap-8">
                <img className="absolute right-0 h-full" src={Squares} alt="" />
                <div className="w-1/2 h-full flex flex-col justify-center items-center relative z-10">
                  <img src={Learning} alt="" />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 relative z-10">
                  <h2 className="text-lg-heading leading-tight">
                    With <span className="text-border">privacy</span>{" "}
                    and <span className="text-border">security</span> being a top priority
                  </h2>
                  <p className="text-body font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                    pariatur dicta commodi perferendis cupiditate nostrum, reiciendis
                    iusto sint dolore quasi sequi quaerat, ad, incidunt impedit
                    voluptatem soluta optio ut nam.
                  </p>
                  <p>Using trusted sources like <span className="text-border underline">Google Authorization</span></p>
                </div>
                
              </div>
            </div>
    </div>
  );
}
