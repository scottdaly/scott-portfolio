import NevermadeLogo from "./NevermadeLogo";

const NevermadeHeader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 flex justify-center items-center z-10">
      <NevermadeLogo />
        </div>
  );
};

export default NevermadeHeader;