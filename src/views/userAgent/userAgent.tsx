"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

type UserAgentProps = {
  userAgent?: string; 
};

export const UserAgent: React.FC<UserAgentProps> = ({ userAgent }) => {
  const { userAgent: contextUserAgent } = useUserAgentContext();

  return (
    <div>
      <BackToHome />

      {(contextUserAgent || userAgent) && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{contextUserAgent || userAgent}</div>
        </div>
      )}

      {!contextUserAgent && !userAgent && <div>No user agent</div>}
    </div>
  );
};
