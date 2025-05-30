import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
  avatarUrl?: string;
  isOnline?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  avatarUrl,
  isOnline = false,
}) => {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "1.5rem",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        maxWidth: "320px",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={
            avatarUrl ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`
          }
          alt={user.name}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #4299e1",
          }}
        />
        {isOnline && (
          <span
            style={{
              position: "absolute",
              bottom: "6px",
              right: "6px",
              width: "14px",
              height: "14px",
              background: "#38a169",
              border: "2px solid #fff",
              borderRadius: "50%",
              display: "block",
            }}
            title="Online"
          />
        )}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{user.name}</div>
        <div style={{ color: "#718096", fontSize: "0.95rem" }}>@{user.username}</div>
        <div style={{ marginTop: "0.5rem", color: "#4a5568", fontSize: "0.95rem" }}>
          {user.company?.catchPhrase}
        </div>
        <div style={{ color: "#a0aec0", fontSize: "0.85rem" }}>{user.email}</div>
      </div>
    </div>
  );
};

export default UserCard;