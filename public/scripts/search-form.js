import { renderBlock } from './lib.js';
export function renderSearchFormBlock(dateCheckIn, dateCheckout) {
    const today = new Date;
    // минимально возможная дата заселения и выселения
    const min = today.toISOString().split('T')[0];
    // максимально возможная дата заселения выселения
    function find_max(objDate) {
        const lastDayOfNextMonth = new Date(objDate.getFullYear(), objDate.getMonth() + 2);
        return lastDayOfNextMonth.toISOString().split('T')[0];
    }
    //переведенная в нужный формат дата заезда по умолчанию
    const default_dci = new Date();
    default_dci.setDate(default_dci.getDate() + 1);
    const transformed_default_dci = default_dci.toISOString().split('T')[0];
    //функция возвращает выезд по умолчанию для даты заезда умолчанию и для введенной даты заезда
    function default_checkout(objDate) {
        const default_dco = new Date(objDate.setDate(objDate.getDate() + 2));
        return default_dco.toISOString().split('T')[0];
    }
    let check_in;
    let check_out;
    let max_checkOut;
    let max_default;
    let min_checkout;
    if (dateCheckIn === '') {
        check_in = transformed_default_dci;
        check_out = (dateCheckout === '') ? default_checkout(default_dci) : dateCheckout;
        max_default = find_max(default_dci);
        max_checkOut = find_max(default_dci);
    }
    else {
        const dciInToObj = new Date(dateCheckIn);
        const dci = dciInToObj.toISOString().split('T')[0];
        check_in = dci;
        check_out = (dateCheckout === '') ? default_checkout(dciInToObj) : dateCheckout;
        min_checkout = dci;
        max_checkOut = find_max(dciInToObj);
    }
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${check_in}" 
            min="${min}" max="${max_default}" name="checkin" />
  </div>
  <div>
  <label for="check-out-date"> Дата выезда </label>
    <input id="check-out-date" type ="date" value="${check_out}" min="${min_checkout}" max="${max_checkOut}" name="checkout"/>
      </div>
      <div>
      <label for="max-price"> Макс.цена суток </label>
        <input id="max-price" type="text" value="" name="price" class="max-price"/>
          </div>
          <div>
          <div><button>Найти </button></div>
          </div>
          </div>
          </fieldset>
          </form>
            `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCLENBQUMsV0FBbUIsRUFBRSxZQUFvQjtJQUUzRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztJQUN2QixrREFBa0Q7SUFDbEQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxpREFBaUQ7SUFDakQsU0FBUyxRQUFRLENBQUMsT0FBYTtRQUMzQixNQUFNLGtCQUFrQixHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDcEYsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQy9CLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sdUJBQXVCLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4RSw2RkFBNkY7SUFDN0YsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFhO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsT0FBTyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxJQUFJLFFBQWdCLENBQUM7SUFDckIsSUFBSSxTQUFpQixDQUFDO0lBQ3RCLElBQUksWUFBb0IsQ0FBQztJQUN6QixJQUFJLFdBQW1CLENBQUM7SUFDeEIsSUFBSSxZQUFvQixDQUFDO0lBRXpCLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTtRQUVwQixRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDbkMsU0FBUyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pGLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsU0FBUyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hGLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN2QztJQUVELFdBQVcsQ0FDUCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCbUQsUUFBUTttQkFDaEQsR0FBRyxVQUFVLFdBQVc7Ozs7cURBSVUsU0FBUyxVQUFVLFlBQVksVUFBVSxZQUFZOzs7Ozs7Ozs7Ozs7YUFZN0YsQ0FDUixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGRhdGVDaGVja0luOiBzdHJpbmcsIGRhdGVDaGVja291dDogc3RyaW5nKSB7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlO1xuICAgIC8vINC80LjQvdC40LzQsNC70YzQvdC+INCy0L7Qt9C80L7QttC90LDRjyDQtNCw0YLQsCDQt9Cw0YHQtdC70LXQvdC40Y8g0Lgg0LLRi9GB0LXQu9C10L3QuNGPXG4gICAgY29uc3QgbWluID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgLy8g0LzQsNC60YHQuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdCw0Y8g0LTQsNGC0LAg0LfQsNGB0LXQu9C10L3QuNGPINCy0YvRgdC10LvQtdC90LjRj1xuICAgIGZ1bmN0aW9uIGZpbmRfbWF4KG9iakRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsYXN0RGF5T2ZOZXh0TW9udGggPSBuZXcgRGF0ZShvYmpEYXRlLmdldEZ1bGxZZWFyKCksIG9iakRhdGUuZ2V0TW9udGgoKSArIDIsKTtcbiAgICAgICAgcmV0dXJuIGxhc3REYXlPZk5leHRNb250aC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgfVxuXG4gICAgLy/Qv9C10YDQtdCy0LXQtNC10L3QvdCw0Y8g0LIg0L3Rg9C20L3Ri9C5INGE0L7RgNC80LDRgiDQtNCw0YLQsCDQt9Cw0LXQt9C00LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cbiAgICBjb25zdCBkZWZhdWx0X2RjaSA9IG5ldyBEYXRlKCk7XG4gICAgZGVmYXVsdF9kY2kuc2V0RGF0ZShkZWZhdWx0X2RjaS5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1lZF9kZWZhdWx0X2RjaSA9IGRlZmF1bHRfZGNpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuICAgIC8v0YTRg9C90LrRhtC40Y8g0LLQvtC30LLRgNCw0YnQsNC10YIg0LLRi9C10LfQtCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQtNC70Y8g0LTQsNGC0Ysg0LfQsNC10LfQtNCwINGD0LzQvtC70YfQsNC90LjRjiDQuCDQtNC70Y8g0LLQstC10LTQtdC90L3QvtC5INC00LDRgtGLINC30LDQtdC30LTQsFxuICAgIGZ1bmN0aW9uIGRlZmF1bHRfY2hlY2tvdXQob2JqRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRfZGNvID0gbmV3IERhdGUob2JqRGF0ZS5zZXREYXRlKG9iakRhdGUuZ2V0RGF0ZSgpICsgMikpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdF9kY28udG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICBsZXQgY2hlY2tfaW46IHN0cmluZztcbiAgICBsZXQgY2hlY2tfb3V0OiBzdHJpbmc7XG4gICAgbGV0IG1heF9jaGVja091dDogc3RyaW5nO1xuICAgIGxldCBtYXhfZGVmYXVsdDogc3RyaW5nO1xuICAgIGxldCBtaW5fY2hlY2tvdXQ6IHN0cmluZztcblxuICAgIGlmIChkYXRlQ2hlY2tJbiA9PT0gJycpIHtcblxuICAgICAgICBjaGVja19pbiA9IHRyYW5zZm9ybWVkX2RlZmF1bHRfZGNpO1xuICAgICAgICBjaGVja19vdXQgPSAoZGF0ZUNoZWNrb3V0ID09PSAnJykgPyBkZWZhdWx0X2NoZWNrb3V0KGRlZmF1bHRfZGNpKSA6IGRhdGVDaGVja291dDtcbiAgICAgICAgbWF4X2RlZmF1bHQgPSBmaW5kX21heChkZWZhdWx0X2RjaSk7XG4gICAgICAgIG1heF9jaGVja091dCA9IGZpbmRfbWF4KGRlZmF1bHRfZGNpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkY2lJblRvT2JqID0gbmV3IERhdGUoZGF0ZUNoZWNrSW4pO1xuICAgICAgICBjb25zdCBkY2kgPSBkY2lJblRvT2JqLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgY2hlY2tfaW4gPSBkY2k7XG4gICAgICAgIGNoZWNrX291dCA9IChkYXRlQ2hlY2tvdXQgPT09ICcnKSA/IGRlZmF1bHRfY2hlY2tvdXQoZGNpSW5Ub09iaikgOiBkYXRlQ2hlY2tvdXQ7XG4gICAgICAgIG1pbl9jaGVja291dCA9IGRjaTtcbiAgICAgICAgbWF4X2NoZWNrT3V0ID0gZmluZF9tYXgoZGNpSW5Ub09iaik7XG4gICAgfVxuXG4gICAgcmVuZGVyQmxvY2soXG4gICAgICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tfaW59XCIgXG4gICAgICAgICAgICBtaW49XCIke21pbn1cIiBtYXg9XCIke21heF9kZWZhdWx0fVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPiDQlNCw0YLQsCDQstGL0LXQt9C00LAgPC9sYWJlbD5cbiAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGUgPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja19vdXR9XCIgbWluPVwiJHttaW5fY2hlY2tvdXR9XCIgbWF4PVwiJHttYXhfY2hlY2tPdXR9XCIgbmFtZT1cImNoZWNrb3V0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPiDQnNCw0LrRgS7RhtC10L3QsCDRgdGD0YLQvtC6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4IDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgYFxuICAgICk7XG59XG4iXX0=