$(document).ready(function () {
    var index = 0;
    var i = 0;
    var elem = `<div class="EducationDetail ">
    <div class="heading">Education Details</div>
    <div class="row">
    <div class="col">
        <label for=""> Choose Class</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">10th</option>
            <option value="2">12th</option>
            <option value="3">Graduation</option>
            <option value="4">Post-Graduation</option>
            </select>
            </div>
            <div class="col">
                <label for="">Institute/College</label>
                <input type="text" class="form-control" placeholder="School/College" required>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Max Marks</label>
                            <input  type="number" id="maxmarks"  class="form-control maxmarks" placeholder="Max marks" required>
                                </div>
                                <div class="col"><label for="">Marks Obtained</label>
                                <input type="number" class="form-control marksobtained "  placeholder="Marks Obtained..." required></div>
                                </div>
                                <div class="row">
                                    <div class="col pr">
                                        <label for="">Percentage(%)</label>
                                        <input  type="number" class="form-control percentage"   placeholder="Percentage">
                                            </div><div class="col">
                                                <label for="">Year of Passing</label>
                                                <input type="number" class="form-control" placeholder="Year of Passing" required>
                                                    </div>
                                                    </div>
                                                    <div class="Delete">
                                                        <button type="button" id="delete" class="btn btn-danger">Delete</button>
                                                        </div>
                                                        <br>
                                                        </div>)`
    $("#btn_2").click(function () {
	 

        if (i < 4) {
            i++;
         

           clone= $(elem).clone().attr('id', 'id'+ i);
           clone.appendTo(".addEdu");
           
           

        }

    });
    $(".addEdu").on('click', '#delete', function () {
    

        $(this).parent().parent().remove();
        // index--;
        i--;
        console.log("Elements left: ", i);
    });
    $(document).on('keyup', '.marksobtained', function () {

    
        let id = $(this).parent().parent().parent().attr("id");
        console.log("cloneId::" +id,);
        let maxmarks=document.getElementById(id);
        maxmarks.find('.maxmarks').val();
        console.log(maxmarks);
        // let marksobtained = $(this).val();
        // let maxmarks = $(this).parent().prev().find('.maxmarks').val();
        // let percentage = (marksobtained / maxmarks) * 100;
        // console.log(percentage);
        // let row = $(this).parent().parent().next().find('.percentage').val(percentage);
       
    });


});

