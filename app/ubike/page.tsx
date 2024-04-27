import API_PATH from '@/common/constants/API_PATH';
import SearchTool from '@/modules/Ubike/SearchTool';

function UbikePage() {
  fetch(`${API_PATH}/ubike/taipei`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
  return (
    <section>
      <div className="container mx-auto">
        <SearchTool />
      </div>
    </section>
  );
}

export default UbikePage;
