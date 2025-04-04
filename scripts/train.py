from ultralytics import YOLO
model = YOLO("yolov8n.pt")  # Load a pre-trained YOLOv8 model
model.train(data='../datasets/data/data.yaml', epochs=100)
