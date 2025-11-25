"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { removeLogo, uploadLogo } from "@/server/actions/settings";
import { Loader2, TrashIcon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";

type LogoType = "dark" | "light";

interface SingleLogoUploaderProps {
  type: LogoType;
  logo: string | null;
}

const SingleLogoUploader = ({ type, logo }: SingleLogoUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      startTransition(async () => {
        const url = await uploadLogo(file, type);
        if (url) {
          setPreviewUrl(url);
          toast.success(
            `${type === "dark" ? "Dark" : "Light"} logo uploaded successfully`
          );
        } else {
          toast.error(
            `Failed to upload ${type === "dark" ? "dark" : "light"} logo`
          );
        }
      });
    }
  };

  const triggerFileInput = () => {
    fileRef.current?.click();
  };

  const handleRemove = async () => {
    startTransition(async () => {
      const result = await removeLogo(type);
      if (result.success) {
        setPreviewUrl(null);
        toast.success(`${type === "dark" ? "Dark" : "Light"} logo removed`);
      } else {
        toast.error(
          `Failed to remove ${type === "dark" ? "dark" : "light"} logo`
        );
      }
    });
  };

  // Show preview if file uploaded, otherwise show existing logo
  const imageSrc = previewUrl || logo;

  return (
    <div className="space-y-2">
      <div
        className={`flex items-center justify-between gap-2 border-1 border-dashed
       dark:border-input border-gray-400/80 p-4 rounded-md ${type === "dark" ? "dark:bg-transparent bg-card-foreground" : "bg-transparent dark:bg-white"} `}
      >
        {imageSrc && !isPending ? (
          <>
            <Image
              src={imageSrc}
              alt={`${type === "dark" ? "Dark" : "Light"} logo`}
              width={100}
              height={100}
              className="object-contain"
            />
            <Button
              variant="outline"
              type="button"
              size="sm"
              onClick={handleRemove}
              className="!bg-transparent !border-none"
              disabled={isPending}
            >
              <TrashIcon className="size-4 text-destructive" />
            </Button>
          </>
        ) : (
          <>
            {!isPending ? (
              <>
                <Input
                  id={`logo-upload-${type}`}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileRef}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={triggerFileInput}
                  className={`w-full !bg-transparent !border-none ${type === "dark" ? "dark:text-white text-white" : "text-dark-foreground dark:text-secondary"}`}
                >
                  <UploadIcon className="size-4" />
                  Upload {type === "dark" ? "Dark" : "Light"} Logo
                </Button>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="size-4 animate-spin" />
                <span
                  aria-live="polite"
                  aria-label={`Uploading ${type} logo`}
                  className="text-sm"
                >
                  Uploading...
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LogoUploader = ({
  logo_dark,
  logo_light,
}: {
  logo_dark: string | null;
  logo_light: string | null;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SingleLogoUploader type="dark" logo={logo_dark} />
      <SingleLogoUploader type="light" logo={logo_light} />
    </div>
  );
};

export default LogoUploader;
