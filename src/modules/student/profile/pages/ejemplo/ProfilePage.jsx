import StudentForm from '../../components/ejemplo/StudentForm';
import { useForm } from '../../hooks/ejemplo/useForm';

const ProfilePage = () => {
  
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
  });

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Formulario Simple</h1>
      <StudentForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ProfilePage