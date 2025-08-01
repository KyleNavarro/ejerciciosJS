const alma_voldemort = new Array(
            'serpiente',
            'harry',
            'diario de tom riddle',
            'copa de hufflepuff',
            'guardapelo de slytherin',
            'diadema de ravenclaw',
            'niagini, la serpiente'
                        
        ); //constructor
        const hechizos = [
            'winwardium leviosá',
            'especto patronus',
            'oculus reparus',
            'criciatus',
            'avada kedavra',
            'lumus',
            'alohomora',
            'accio',
            'expeliarmus'
        ];//literal


        function mostrarHorrocruxes(){
                for(let i = 0; i < alma_voldemort.length; i++){
                document.writeln(`<li>${alma_voldemort[i]} </li>`);            
            }
        }

         function mostrarHechizos(){
                for(let i = 0; i < hechizos.length; i++){
                document.writeln(`<li>${hechizos[i]} </li>`);            
            }
        }
        