export const Footer = () => {
  return (
    <section className="border-t border-secondary w-full">
      <div className="mx-auto py-6 text-center text-secondary">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Tanvir Hasan Serazy. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};
