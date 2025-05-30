import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
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
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
          alt={user.name}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #4299e1",
          }}
        />
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