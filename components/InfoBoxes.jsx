import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgrounColor: "bg-black",
            }}>
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgrounColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgrounColor: "bg-blue-500",
            }}>
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

/*

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <a
              href="/properties.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              
            </a>
          </div>
          <div className=" p-6 rounded-lg shadow-md">
            <a
              href="/add-property.html"
              className="inline-block  text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              
            </a>
          </div>
*/
