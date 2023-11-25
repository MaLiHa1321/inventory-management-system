import Container from "../Container/Container";


const AboutPage = () => {
    return (
        <div className="mt-12">
          <Container>

            <div className="hero min-h-[500px] bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12">
    <img src="https://i.ibb.co/D5gT0Nz/kelly-sikkema-XX2-WTb-Lr3r8-unsplash.jpg" className="w-[500px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl md:text-5xl font-bold">About Us!</h1>
      <p className="py-3 lg:py-6 text-base md:text-xl">Inventory tracking can be time-consuming for many small and medium-sized businesses. QuickBooks helps you effectively manage your stock, so you always know what you have and what you need before you even need it.As stock comes in and out, QuickBooks’ stock inventory management software auto-updates your inventory. This makes it easy to see what’s selling and what you need to order. As the value of your stock changes, so does your balance sheet. Values will automatically adjust throughout the day.</p>
    
    </div>
  </div>
</div>
          </Container>
            
        </div>
    );
};

export default AboutPage;