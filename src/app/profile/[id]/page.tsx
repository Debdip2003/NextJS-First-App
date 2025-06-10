export default function UserProfile({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="text-gray-700 mb-4">This is your profile page of {id}</p>
        <p className="text-gray-500">
          You can view and edit your profile information here.
        </p>
      </div>
    </div>
  );
}
