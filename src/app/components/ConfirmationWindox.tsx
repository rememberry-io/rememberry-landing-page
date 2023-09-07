"use client";

export default function ConfirmationWindow() {

  return (
    <div className="rounded-lg text-center mx-10 shadow-2xl p-12 sm:max-w-[80%] sm:m-auto md:m-auto md:max-w-[60%] xl:max-w-[40%] max-w-2xl">
      <article>
        <h3 className="font-semibold text-black md:text-xl">
          {" "}
		  Thank you for signing up!
        </h3> <br></br>
		<p className="text-black text-xs leading-5 sm:text-base">
		Please check out your inbox and confirm your signup ☑️
		</p>
      </article>
    </div>
  );
}
