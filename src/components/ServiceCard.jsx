const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="card text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
// This component can be used to display individual service cards in the services section of your app.
// I have passed props like title, description, and icon to customize each card.
// I can also import and use this component in the Services section like this:
// import ServiceCard from './ServiceCard';