import { fetchProfile } from '@/actions/user';
import ProfileForm from './ProfileForm';

const ProfilePage = async () => {
  const profile = await fetchProfile();
  return (
    <main>
      <ProfileForm profile={profile} />
    </main>
  );
};

export default ProfilePage;
