export function errorHandler(err, req, res, next) {
  console.error("Hata:", err);

  res.status(500).json({
    success: false,
    message: "Sunucu hatası",
    error: err?.message || "Bilinmeyen hata"
  });
}

export default errorHandler;
