<?php

    include 'inc/header.php';
    include 'inc/navbar.php';
    include 'inc/success.php';
    include 'inc/error.php';

?>

<h1 class="text-center text-4xl my-6">Symbols</h1>

<div class="inline container text-center">
    <div class="inline m-2" onclick="run(2, 'Diameter')"><button class="bg-blue-200 hover:bg-blue-300 p-2 w-10">Ø</button></div>
    <div class="inline bg-blue-200 p-2 w-10">Command: Diameter</div>
<br><br>
    <div class="inline m-2" onclick="run(2, 'diameter')"><button class="bg-blue-200 hover:bg-blue-300 p-2 w-10">ø</button></div>
    <div class="inline bg-blue-200 p-2 w-10">Command: diameter</div>
<br><br>
    <div class="inline m-2" onclick="run(2, 'grad')"><button class="bg-blue-200 hover:bg-blue-300 p-2 w-10">°</button></div>
    <div class="inline bg-blue-200 p-2 w-10">Command: grad</div>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br>

<?php
    
    include 'inc/footer.php';
    include 'inc/end.php';

?>