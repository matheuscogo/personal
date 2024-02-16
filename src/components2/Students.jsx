import students from '../navigation/Students';
import CardUser from './CardUser';

function Students() {
    return (
        <div className="box-students">
            <h1>Alunos</h1>
            <div>
                {
                    students.map((student, index) => {
                        return (
                                <CardUser
                                    key={index}
                                    image={student.image}
                                    name={student.name}
                                />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Students;