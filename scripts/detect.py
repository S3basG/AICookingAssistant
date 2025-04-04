from ultralytics import YOLO
model = YOLO("yolov8n.pt")  # Load a pre-trained YOLOv8 model
results = model.predict(source='image.jpg')
results.show()